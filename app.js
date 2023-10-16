const navLinks = ["Home","Sevices","About","Contact"];

// const products = fetch('https://fakestoreapi.com/products/')
// .then(res=>{
//     console.log(res);
//     res.json();

//     }
//     )
// .then(json=>console.log(json));

const appMain = document.getElementById("app");
// Header Section
    const header = document.createElement("header");
    appMain.appendChild(header);
        // logo
        const logo = document.createElement("div");
        logo.classList.add("logo");
        logo.innerText = "LOGO";
        header.appendChild(logo);

        // navlinks
        const navlist = document.createElement("ul");
        header.appendChild(navlist);

        navLinks.forEach((l)=>{

            const list = document.createElement("li");
            list.textContent = `${l}`;
            navlist.appendChild(list)

        });

        // carts and profile
        
        const rightNav = document.createElement("div");
        rightNav.classList.add("rightNav");
        header.appendChild(rightNav);

            // cart
            
            const buttonCart = document.createElement("button");
            buttonCart.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>`;
            rightNav.appendChild(buttonCart);

            // profile

            const avtar = document.createElement("div");
            avtar.innerHTML = `avtar`;
            rightNav.appendChild(avtar);

// Main Section

    const main = document.createElement("main");
    appMain.appendChild(main);
    
    // product container
        
    const productContainer = document.createElement("div");
    productContainer.classList.add("product-container");
    main.appendChild(productContainer);

            // Fetching API from fakestore and created product card
            fetch('https://fakestoreapi.com/products/')
                .then(res=>{
                    return res.json();
                        })
                        .then(products=>{

                                products.forEach((product)=>{

                                    productContainer.innerHTML += `<article class="product-container ">
                                    <div class="image">
                                        <img src="${product.image}" alt="${product.title}">
                                    </div>
                                    <div class="desc">
                                        <div class="title">${product.title}</div>
                                        <div class="price">${product.price}</div>
                                    </div>
                                </article>` 
                                 });

                                 return products;
                            }).catch((error)=>{
                                document.write("Server is Busy, Try Again Some Time");
                            });



            





window.onload = () =>
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((booksArr) => {
      console.log(booksArr);
      booksArr.forEach((bookObj) => {
        const row = document.getElementById("books-shelf");
        const col = document.createElement("div");
        col.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4";
        const card = document.createElement("div");
        card.className = "card h-100 shadow";
        const cardImg = document.createElement("img");
        cardImg.className = "card-img-top";
        cardImg.src = bookObj.img;
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        const bookTitle = document.createElement("h5");
        bookTitle.className = "card-title";
        bookTitle.innerText = bookObj.title;
        const bookPrice = document.createElement("p");
        bookPrice.className = "card-text";
        bookPrice.innerText = "Price: €" + bookObj.price;
        const addBtn = document.createElement("button");
        addBtn.className = "btn btn-success";
        addBtn.type = "button";
        addBtn.innerText = "Add to cart";
        addBtn.addEventListener("click", () => {
          const emptyMessage = document.getElementById("empty-cart");
          emptyMessage.remove();
          const shoppingCart = document.getElementById("cart");
          const cartItem = document.createElement("li");
          cartItem.className = "dropdown-item";
          cartItem.innerText = bookObj.title;

          shoppingCart.appendChild(cartItem);
        });
        const trashBtn = document.createElement("button");
        trashBtn.className = "btn btn-danger";
        trashBtn.type = "button";
        trashBtn.innerText = "Remove";
        trashBtn.addEventListener("click", () => {
          col.remove();
        });

        cardBody.appendChild(bookTitle);
        cardBody.appendChild(bookPrice);
        cardBody.appendChild(addBtn);
        cardBody.appendChild(trashBtn);
        card.appendChild(cardImg);
        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);
      });
    });

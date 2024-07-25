
let q = document.getElementById("quote");
// Each animation lasts 3 seconds.
let s = 8000;

function quotesListIterator(list) {
    let index = 0;
    
    return function() {
        if (index >= list.length) {
            index = 0;  // Reset to start when we've gone through all elements.
        }
        return list[index++];
    };
    
}

const quotes = ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus vero! Dolorem ab, in fugit, architecto, incidunt ea quas magni labore provident perferendis saepe a cumque quod omnis! Assumenda, dicta. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat voluptatum ducimus nisi dolor ullam placeat, amet corporis ab, exercitationem, suscipit repellendus inventore mollitia nihil dolorem saepe sint nesciunt assumenda! Esse. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate provident minima placeat rerum obcaecati quasi cumque totam, officia quis, earum qui necessitatibus consequatur quos et mollitia similique deleniti illum laudantium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam consequuntur recusandae odio officia, laudantium dolor neque temporibus iusto aperiam velit fugit quasi saepe sit provident quos, voluptate ut perspiciatis qui? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, consequuntur. Quas, voluptatem libero ad voluptatibus dolores ex, similique, sint quia eaque deserunt explicabo perspiciatis accusamus repudiandae debitis. Consequatur, tempora ipsam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore voluptatem rem laborum necessitatibus est eos corporis molestiae porro, maiores quidem, doloremque odio. At enim est eligendi reprehenderit dolorem voluptatum libero. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid officia magnam, quasi id porro cum vel voluptatibus ipsa voluptates! Ipsum quis porro quae eligendi qui et reiciendis dignissimos magnam eaque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae repudiandae beatae doloremque voluptatum magni! Culpa assumenda a nulla in quisquam minima obcaecati, beatae vitae voluptatibus corrupti numquam autem, repellat non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fugit minus eius molestiae, tenetur assumenda doloremque tempora harum! Corrupti maxime doloremque fuga commodi illum sed cumque qui vel assumenda veritatis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, quod? Debitis eum, aspernatur molestiae tenetur dolor quidem explicabo at accusantium ullam nihil reprehenderit accusamus incidunt rem neque nemo facere sed.', 'banana', 'cherry', 'date'];
const quotesIterator = quotesListIterator(quotes);

while (1) {
    // Change text.
    q.innerText = quotesIterator();

    // Focus in
    q.classList.remove("text-blur-out");
    q.classList.add("text-focus-in");

    // Sleep.
    await new Promise(r => setTimeout(r, s));

    // Blur out.
    q.classList.remove("text-focus-in");
    q.classList.add("text-blur-out");

    // Sleep.
    await new Promise(r => setTimeout(r, s));
}


var changeMeme = function (){
    // Get a random meme.

    // With api is better, but i'm too poor to pay for a non static-hosting and i don't want to use serverless function or external db.
    // I want to stay as much as possible in the static world.
    // I hope it will works fine anyway with few memes.

    var memes = []
    var memetag = document.getElementById("memescript")
    if (memetag === null) {
      return;
    }
    memetag.getAttribute("data-files").split(", ").forEach((element) => {
      let img = `/src/images/meme/${element}`;
      memes.push(img);
    });
    var meme = memes[Math.floor(Math.random() * memes.length)];
    document.getElementById("meme").src = meme;

    // Set author.
    var author = "";
    if (meme.includes("xkcd")) {
      author = "XKCD";
    }
    if (author !== "") { 
      author = "By: " + author;
    }
    document.getElementById("author").innerText = author;

    // Set alt attribute and description.
    var altattribute = "Meme";
    var description = "";
    if (meme.includes("overeng")) {
      altattribute = "Overengineering Meme";
      description = "Me writing a simple hello world program that automatic translate itself based on the user's location in the new programming language i want to learn.";
    }else if (meme.includes("engsylo")) {
      altattribute = "Engineering Stock Market Sylogism Meme";
    }else if (meme.includes("unixdating")) {
      altattribute = "Unix Dating Meme";
    }else if (meme.includes("smilinggolden")) {
      altattribute = "Smiling Golden Retriever Meme";
    }else if (meme.includes("slothlazy")) {
      altattribute = "Lazy Sloth Meme";
      description = "Me when I'm trying to write a new post for this website.";
    }else if (meme.includes("lotofpcwork")) {
      altattribute = "A Lot Of Work For The PC To See A Cat Meme";
    }else if (meme.includes("huskyconfused")) {
      altattribute = "A Confused Husky Working On PC Meme";
      description = "Me when I'm trying to make working the code of this fantastic website.";
    }else if (meme.includes("goldendisaster")) {
      altattribute = "Golden Retriever Disaster Meme";
    }else if (meme.includes("christmasdog")) {
      altattribute = "A Christmas Dog And Christmas Tree Meme";
    }else if (meme.includes("xkcdtsp")){
      altattribute = "TSP Meme";
    }else if (meme.includes("tspopt")){
      altattribute = "TSP Optimization Meme";
    }
    document.getElementById("meme").setAttribute("alt", altattribute)
    document.getElementById("description").innerText = description;

  }

// First load.
changeMeme();

// On swap.
document.addEventListener("astro:after-swap", function() {
    changeMeme();
});


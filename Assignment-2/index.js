// Q1 Create a promise that resolves in 4 seconds and returns "success" string.

let promise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("success");
    }, 4000);
  });
};

// Q2 Run the above promise and make it console.log "success"

promise().then((str) => {
  console.log(str);
});

// Q3 Read about Promise.resolve() and Promise.reject(). How can you make the above promise shorter with Promise.resolve() and console loggin "success"

setTimeout(() => {
  Promise.resolve("success").then((str) => {
    console.log(str);
  });
}, 4000);

// Q4 Convert the below promise into async await
// fetch("https://jsonplaceholder.typicode.com/users/").then((response) => response.json()).then(console.log);

let res = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/");
  if (response) {
    return response.json();
  }
  return;
};

console.log(res());

// Q5 Update the function below to  have async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map(async (url) => {
      let response = await fetch(url);
      if (response) {
        return response.json();
      }
    })
  );

  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
};

getData();

// Q6 Add a try catch block to the Ques-4) solution in order to catch any errors. Now, use the given array containing an invalid url, so you console.log your error with 'oooooops'.

// let result = async (url) => {
//     try {
//         const response = await fetch(url);
//         return response.json();
//     } catch (err) {
//         console.log("oooooops...");
//     }
// }

// const urls = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholdeTYPO.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/albums",
// ];

// urls.map((url) => result(url));

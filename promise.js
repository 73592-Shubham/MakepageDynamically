<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      //promise takes 2 parameters resolve and error
      //promise Chaining-->IMPORTANT:always return the output from then()to next then()
      //
      const posts = [
        { title: "Title 1", body: "This is Title 1" },
        { title: "Title 2", body: "This is Title 2" },
      ];
      let count = 0;
      const displayPost = () => {
        let output = "";
        setTimeout(() => {
          console.log("displaying posts");
          if (posts) {
            posts.forEach((post) => {
              output += `<li>${post.title}</li>`;
            });
            document.body.innerHTML = output;
          } else {
            document.body.innerHTML = output;
          }
        }, 1000);
      };
      const createPost = (post) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (posts.push(post)) {
              console.log("creating a new post");
              resolve();
            } else {
              const error = new Error("Post did not work");
              reject(error);
            }
          }, 2000);
        });
      };
      const deletePost = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (posts.length) {
              posts.pop();
              console.log("deleteing last post");
              resolve();
            } else {
              const error = new Error("Posts array is Empty");
              reject(error);
            }
          }, 3000);
        });
      };

      // displayPost();
      createPost({ title: "title 3", body: "This is title three" })
        .then(() => {
          displayPost();
        })
        .then(() => {
          return deletePost();
        })
        .then(() => {
          displayPost();
        })
        .then(() => {
          return deletePost();
        })
        .then(() => {
          displayPost();
        })
        .then(() => {
          return deletePost();
        })
        .then(() => {
          displayPost();
        })
        .then(() => {
          return deletePost();
        })
        .then(() => {
          displayPost();
        })
        .catch((error) => {
          console.log(error.message); //catches the error when the post array is empty and we are trying to delete
        })
        .then(() => {
          //works even after
          return createPost({ title: "Title 4", body: "This is body four" });
        })
        .then(() => displayPost())
        .then(() => {
          return deletePost();
        })
        .then(() => displayPost())
        .catch((error) => {
          console.log(error.message);
        });
      // displayPost();
      // createPost({ title: "Title 3", body: "This is title 3" })
      //   .then(() => {
      //     displayPost();
      //     deletePost()
      //       .then(() => {
      //         displayPost();
      //         deletePost()
      //           .then(() => {
      //             displayPost();
      //             deletePost()
      //               .then(() => {
      //                 displayPost();
      //                 deletePost()
      //                   .then(() => display())
      //                   .catch((err) => console.log(err));
      //               })
      //               .catch((err) => console.log(err));
      //           })
      //           .catch((err) => console.log(err));
      //       })
      //       .catch((err) => console.log(err));
      //   })
      //   .catch((err) => console.log(err));
    </script>
  </body>
</html>

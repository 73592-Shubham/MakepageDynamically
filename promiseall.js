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
      /*
I want you to create one more promise called updateLastUserActivityTime. 
Every time the user creates a post, this promise should be parallely called (should execute in 1 second) .
When both the promises (createPost and updateLastUserActivityTime resolve),
 I want you to console log all the posts created and lastActivityTime of the user.
  
Once both the above promises are resolved , I want you to delete the last post by calling the deletion promise. Once successfully deleted, I want you to log the new set of Posts of the user.
      */
      const posts = [
        {
          title: "Title 1",
          body: "This is Title 1",
          createdAt: new Date().getTime(),
        },
        {
          title: "Title 2",
          body: "This is Title 2",
          createdAt: new Date().getTime(),
        },
      ];
      const user = { name: "shashanka", lastUpdate: new Date().getTime() };

      const displayPost = () => {
        let output = "";
        setTimeout(() => {
          console.log("displaying posts");
          if (posts) {
            posts.forEach((post) => {
              output += `<li>${post.title} created At-${post.createdAt}</li>`;
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
            if (posts.push({ ...post, createdAt: new Date().getTime() })) {
              resolve("Created new post successfuly");
            } else {
              const error = new Error("Post did not work");
              reject(error);
            }
          }, 2000);
        });
      };
      const updateLastUserActivityTime = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            user.lastUpdate = new Date().getTime();
            resolve(user.lastUpdate);
          }, 5000);
        });
      };

      console.log("User details at begining", user);
      Promise.all([
        createPost({ title: "title 3", body: "this is post three" }),
        updateLastUserActivityTime(),
      ])
        .then(([createdStatus, userUpdateLast]) => {
          displayPost();
          console.log("createdStatus", createdStatus);
          console.log("userUpdateLast", userUpdateLast);
        })
        .catch((err) => {
          console.log(err);
        });
    </script>
  </body>
  </html>

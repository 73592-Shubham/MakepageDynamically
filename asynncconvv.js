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
      const posts = [
        { title: "Title 1", body: "This is Title 1" },
        { title: "Title 2", body: "This is Title 2" },
      ];

      const displayPost = () => {
        return new Promise((res, rej) => {
          let output = "";
          setTimeout(() => {
            posts.forEach((post) => {
              output += `<li>${post.title}--${post.body}`;
            });
            document.body.innerHTML = output;
            res("post displayed");
          }, 2000);
        });
      };
      // displayPost();

      const createPost = async (post) => {
        let p1 = await new Promise((res, rej) => {
          setTimeout(() => {
            posts.push(post);
            res("post pushed");
          }, 5000);
        });
        console.log(p1);
        let p2 = await displayPost();
        console.log(p2);
        // return p1;
      };
      const deletePost = async () => {
        try {
          let p3 = await new Promise((res, rej) => {
            setTimeout(() => {
              if (posts.length) {
                posts.pop();
                res("post has been popped");
              } else {
                rej("Post array is empty");
              }
            }, 2000);
          });
          console.log(p3);
          let p4 = await displayPost();
          console.log(p4);
        } catch (err) {
          console.log(err);
        }
      };
      createPost({ title: "Title 3", body: "This is Title 3" })
        .then(() => {
          return deletePost();
        })
        .then(() => {
          return deletePost();
        })
        .then(() => {
          return deletePost();
        })
        .then(() => {
          return deletePost();
        })
        .catch((err) => console.log(err));
    </script>
  </body>
</html>

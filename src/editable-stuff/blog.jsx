import { BlogBuilder } from "../components/blog/BlogBuilder";
const bloglist = [];

const blog = new BlogBuilder({
  title: "My First Blog",
  image: "img",
  description:
    ""
  })
  .addHeading("Heading")
  .addParagraph(
    ""
  )
  .addParagraph(
    ""
  );

const blog1 = new BlogBuilder({
  title: "My Second Blog",
  image: "img",
  description:
    ""
  })
  .addHeading("Heading")
  .addParagraph(
    ""
  )
  .addParagraph(
    ""
  )
  .addHeading("New Heading")
  .addParagraph(
    ""
  )
  .addParagraph(
    ""
  );

bloglist.push(blog1);
bloglist.push(blog);

export default bloglist;

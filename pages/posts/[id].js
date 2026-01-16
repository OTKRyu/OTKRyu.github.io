import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData, id }) {
  const href = `/posts/${postData.relatedPost}`;
  return (
    <Layout>
      <Seo id={id} title={postData.title} tags={postData.tags} />
      <article className="bg-white border rounded my-3 w-full h-full p-5">
        <h1 className="text-3xl my-3">{postData.title}</h1>
        <div className="text-slate-500">
          <Date dateString={postData.date} />
        </div>
        <hr className="my-3"></hr>
        <div
          className="prose lg:prose-xl px-2 m-auto my-4 sm:my-16"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
        {postData?.relatedPost && (
          <div className="mt-8 flex justify-center">
            <a
              href={href}
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-5 py-3 text-lg text-gray-700 hover:bg-gray-100 hover:text-black transition"
            >
              👉 Related post : 
              <span className="font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors">{postData.relatedPost}</span>
            </a>
          </div>
        )}
              </article>
            </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const id = params.id;
  return {
    props: {
      id,
      postData,
    },
  };
}

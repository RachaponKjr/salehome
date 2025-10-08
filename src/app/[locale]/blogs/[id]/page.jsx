import BlogDetail from '@/containers/blogPage/BlogDetail';

export default function BlogDetailPage({ params }) {
  return <BlogDetail blogId={params.id} />;
}

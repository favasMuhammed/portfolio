import ThoughtPostView from '../../../components/ThoughtPostView';
import { thoughtContent } from '../../../data/thoughtContent';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = thoughtContent[slug];
    return {
        title: post ? `${post.title} | favastp.dev` : 'Post Not Found',
        description: post ? post.title : 'Thought post',
    };
}

export async function generateStaticParams() {
    return Object.keys(thoughtContent).map((slug) => ({
        slug: slug,
    }));
}

export default async function ThoughtPostPage({ params }) {
    const { slug } = await params;
    return <ThoughtPostView slug={slug} />;
}

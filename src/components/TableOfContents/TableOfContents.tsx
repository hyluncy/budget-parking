
import "./TableOfContents.css";

export default function TableOfContents ({ content }: {content: string}) {
    return (
            <p className="red">{content}</p>
    )
}
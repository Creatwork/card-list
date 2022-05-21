import React from "react";

interface CardProps {

    first_name: String,
    last_name: String,
    company: String,
    movie_title: String,
    

}

const Card : React.FC <CardProps> = ({first_name,last_name,company,movie_title})=>{

return(<article className="card">
    <header className="card-header">
    <p>{company}</p>
    <h2>{movie_title}</h2>
    </header>

    <div className="card-author">
    <a className="author-avatar" href="#">
    <img alt="Author" src={`https://robohash.org/${first_name}`} />
    </a>
    <svg className="half-circle" viewBox="0 0 106 57">
    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
    </svg>

    <div className="author-name">
        <div className="author-name-prefix">Author</div>
        {first_name} {last_name}
        </div>
    </div>
    <div className="tags">
        <a href="#">sin</a>
        <a href="#">cos</a>
        <a href="#">tan</a>
    </div>
</article>);

};
export default Card;
import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

const articles = [
  {
    imageUrl: 'img/plugin-blog.jpg',
    title: 'Graphback - Low Code, GraphQL based API suited for your needs',
    content: 'The main purpose of Graphback is to provide an autogenerated GraphQL based CRUD API for developers and their various use cases. Graphback differs from other GraphQL based solutions by utilizing code generation and application templates as a quick way to get started.',
    link: 'https://medium.com/@wtr/graphback-plugin-based-realtime-database-generator-78f4f608b81e'
  },
  {
    imageUrl: 'img/graphqlserve.jpeg',
    title: 'Setup a GraphQL server in seconds using graphql-serve',
    content: 'With just one command, you can have a GraphQL server running on your machine that you can use to test a frontend application or just test GraphQL. GraphQL serve supports data loading and has comprehensive support for all types of relationships',
    link: 'https://medium.com/@shibanidash71/setup-a-graphql-server-in-seconds-using-graphql-serve-96c5b488de41'
  },
  {
    imageUrl: 'img/graphback-blog.png',
    title: 'The evolution of the GraphQL ecosystem — Graphback',
    content: 'The target of Graphback is to make sample applications working with your business logic by utilizing application templates and code generation. Developers can provide GraphQL schema as input and the command-line client will generate data access methods on top of the chosen stack',
    link: 'https://medium.com/@wtr/the-evolution-of-the-graphql-ecosystem-graphback-506a1d0d4dfb'
  }
]

function Card({ imageUrl, title, content}) {
  return (
    <div className="card-demo">
      <div className="card" style={{ borderRadius: 0, padding: '2rem', border: '1px solid #f5f5f5' }}>
        <div className="card__image">
          <img
            src={useBaseUrl(imageUrl)}
            alt="Blog card image"
          />
        </div>
        <div className="card__body">
          <h4>{title}</h4>
          <small>{content}</small>
        </div>
      </div>
    </div>
  );
}

export function BlogCards() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#fff',
        padding: '2em 0'
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col col--12"><h1>Learn more</h1></div>
        </div>
        <div className="row">
          {articles && articles.length && (
            articles.map((props,index) => {
              return (
                <div className="col col--4" key={index}>
                  <a className="card-anchor" 
                    href={props.link}>
                    <Card {...props} />
                  </a>
                </div>
              );
            })
          )}
          {/* <div className="col col--4"><Card /></div> */}
          {/* <div className="col col--4"><Card /></div> */}
        </div>
      </div>
    </section>
  );
}
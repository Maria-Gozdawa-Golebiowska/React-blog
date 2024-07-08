const initialState = {
  posts: [
    {        
      id: '1',
      title: 'Lost in space for years',
      shortDescription: 'Short description of the article..',
      content: 'Main content of the article',
      publishedDate: new Date('2022-02-03'),
      category: 'Sport',
      author: 'John Doe'
    },
    {
      id: '2',
      title: 'Amazing adventure begins...',
      shortDescription: 'Short description of the article..',
      content: 'Main content of the article',
      publishedDate: new Date('2024-02-05'),
      category: 'News',
      author: 'John Doe'
    },
    {
      id: '3',
      title: 'How to start exploring world',
      shortDescription: 'Short description of the article..',
      content: 'Main content of the article',
      publishedDate: new Date('2024-02-06'),
      category: 'Movies',
      author: 'John Doe'
    },
  ],
  categories: [
    'Sport',
    'News',
    'Movies'
  ]
};

export default initialState;

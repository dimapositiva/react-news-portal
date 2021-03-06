class Storage {
  constructor(papers = [], users = [], news = []) {
    this.papers = papers
    this.users = users
    this.news = news
  }

  // Users methods
  addUser(user){
    if (!this.users.includes(user)) {
      this.users.push(user)
    }
  }

  deleteUser(ID){
    let usersList = this.users;
    this.users = usersList.filter(user => user.ID !== ID)
  }

  getUser(ID) {
    return this.users.filter(user => user.ID === ID)[0]
  }

  getAllUsers(){
    return this.users
  }

  // News methods
  addNews(newsObj){
    this.news.push(newsObj)
  }

  deleteNews(ID){
    let newsList = this.news
    this.news = newsList.filter(news => news.ID !== ID)
  }

  getNews(ID) {
    return this.news.filter(news => news.ID === ID)[0]
  }

  getAllNews(){
    return this.news
  }

  getPaperNews = (paper) => {
    return this.news.filter(news => news.paper === paper)
  }
}

export default Storage

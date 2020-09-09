class NewsCardList {
  
  static _template = document.querySelector('#card-template').content;


  constuctor() {

  }
 	
 	render = (container) => {
 		this._view = NewsCardList._template.cloneNode(true).children[0];
 		container.append(this._view);
 	}


}

export default NewsCardList;
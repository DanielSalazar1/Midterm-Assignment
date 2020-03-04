import slugify from "slugify";
import shortid from "shortid";

const TREE_DB = "TreeDB";
/**
* DAO = DATABASE ACCESS OBJECT
*/

class TreeItem {
  constructor(name, why, scientifiName, description, learnMore){
    const slug= slugify(name.toLowerCase()) + "-" + shortid.generate();
    this.slug = slug;
    this.name = name;
    this.why = why;
    this.scientifiName = scientifiName;
    this.description = description;
    this.learnMore = learnMore;
  }
}

export default class TreeDAO {
  constructor() {

      let dbArray = localStorage.getItem(TREE_DB);

      if (dbArray === undefined || dbArray === null ) {
        localStorage.setItem(TREE_DB, JSON.stringify([]));
      }
  }

  getTreeList() {
      const dbArray= localStorage.getItem(TREE_DB)
      console.log("DAO |", dbArray)
      return JSON.parse(dbArray);

  }

  addTreeObject(name, slug, why, scientifiName, description, learnMore) {
      const treeObj = new TreeItem(name, slug, why, scientifiName, description, learnMore);

      const treeArr = this.getTreeList();
      treeArr.push(treeObj);

      localStorage.setItem(TREE_DB, JSON.stringify(treeArr));
  }

  getTreeObject(slug) {

    const treeArr = this.getTreeList();

    let treeObj;
    for (treeObj of treeArr) {
      if (treeObj.slug === slug) {
        console.log("DAO | Found obj", treeObj);
        return treeObj;
      }
    }
    return null;
  }

  updateTreeObject(slug, name, why, scientifiName, description, learnMore) {
    const treeArr = this.getTreeList();

    let treeObj;
    for (treeObj of treeArr) {
      if (treeObj.slug === slug) {
        return treeObj;
      }
    }
    localStorage.setItem(TREE_DB, JSON.stringify(treeArr));
  }

}

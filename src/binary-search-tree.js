const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.rootT = null;
  }

  root() {
    return this.rootT;
  }

  add(data) {
    this.rootT = addNodeIn(this.rootT, data);

    function addNodeIn(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data > node.data) {
        node.right = addNodeIn(node.right, data);
      } else {
        node.left = addNodeIn(node.left, data);
      }

      return node;
    }
  }
  has(data) {
    return searchIn(this.rootT, data);
    function searchIn(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data < node.data) {
        return searchIn(node.left, data);
      } else return searchIn(node.right, data);
    }
  }

  find(data) {
    return findIn(this.rootT, data);
    function findIn(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return findIn(node.left, data);
      } else return findIn(node.right, data);
    }
  }

  remove(data) {
    this.rootT = removeIn(this.rootT, data);

    function removeIn(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeIn(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeIn(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          return (node = node.right);
        }
        if (!node.right) {
          return (node = node.left);
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeIn(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.rootT) {
      return null;
    }

    let node = this.rootT;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootT) {
      return null;
    }

    let node = this.rootT;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};

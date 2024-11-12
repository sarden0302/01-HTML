class BinaryTree {
    constructor(data, leftTree = null, rightTree = null) {
        this.data = data;
        this.leftSubTree = leftTree;
        this.rightSubTree = rightTree;
        this.height = 1;
    }

    getData() {
        return this.data;
    }

    setData(data) {
        this.data = data;
    }

    getLeftSubTree() {
        return this.leftSubTree;
    }

    setLeftSubTree(tree) {
        this.leftSubTree = tree;
    }

    getRightSubTree() {
        return this.rightSubTree;
    }

    setRightSubTree(tree) {
        this.rightSubTree = tree;
    }

    preOrderTraversal(tree) {
        if (tree == null) return;

        console.log(tree.data);
        this.preOrderTraversal(tree.getLeftSubTree());
        this.preOrderTraversal(tree.getRightSubTree()); 
    }

    inOrderTraversal(tree) {
        if (tree == null) return;

        this.inOrderTraversal(tree.getLeftSubTree());
        console.log(tree.data);
        this.inOrderTraversal(tree.getRightSubTree());
    }

    postOrderTraversal(tree) {
        if (tree == null) return;
        this.postOrderTraversal(tree.getLeftSubTree());
        this.postOrderTraversal(tree.getRightSubTree());
        console.log(tree.data);
    }

    removeLeftSubTree() {
        let deletingNode = this.getLeftSubTree();
        this.setLeftSubTree(null);
        return deletingNode;
    }

    removeRightSubTree() {
        let deletingNode = this.getRightSubTree();
        this.setRightSubTree(null);
        return deletingNode;
    }
}

class AVLTree {
    constructor(rootNode = null) {
         this.root = rootNode;
    }

    search(targetData) {
        let currentNode = this.root;

        while(currentNode != null) {
            if (currentNode.getData() == targetData) {
                return currentNode;
            } else if (currentNode.getData() > targetData) {
                currentNode = currentNode.getLeftSubTree();
            } else {
                currentNode = currentNode.getRightSubTree();
            }
        }

        return null;
    }

    getHeight(node) {
        if (node == null) {
            return 0;
        } 
        return node.height;
    }

    updateHeight(node) {
        let leftChildHeight = this.getHeight(node.getLeftSubTree());
        let rightChildHeight = this.getHeight(node.getRightSubTree());
        node.height = Math.max(leftChildHeight, rightChildHeight) + 1;
    }

    getBalanceFactor(node) {
        return this.getHeight(node.getLeftSubTree() - this.getHeight(node.getRightSubTree()));
    }

    rotateLeft(node) {
        let childNode = node.getRightSubTree();
        node.setRightSubTree(childNode.getLeftSubTree());
        childNode.setLeftSubTree(node);

        this.updateHeight(node);
        this.updateHeight(childNode);

        return childNode;
    }

    rotateRight(node) {
        let childNode = node.getLeftSubTree();
        node.setLeftSubTree(childNode.getRightSubTree());
        childNode.setRightSubTree(node);

        this.updateHeight(node);
        this.updateHeight(childNode);

        return childNode;
    }
}

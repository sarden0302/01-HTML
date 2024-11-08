class BinaryTree {
    constructor(data, leftTree = null, rightTree = null) {
        this.data = data;
        this.leftSubTree = leftTree;
        this.rightSubTree = rightTree;
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
}

let tree1 = new BinaryTree(1);
let tree2 = new BinaryTree(2);
let tree3 = new BinaryTree(3);
let tree4 = new BinaryTree(4);
let tree5 = new BinaryTree(5);
let tree6 = new BinaryTree(6);
let tree7 = new BinaryTree(7);

tree1.setLeftSubTree(tree2);
tree1.setRightSubTree(tree3);
tree2.setLeftSubTree(tree4);
tree2.setRightSubTree(tree5);
tree3.setLeftSubTree(tree6);
tree3.setRightSubTree(tree7);

console.log("루트 오른쪽 : " + tree1.getRightSubTree().getData());
console.log("루트 오른쪽의 왼쪽 : " + tree1.getRightSubTree().getLeftSubTree().getData());

console.log("전위 순회");
tree1.preOrderTraversal(tree1);

console.log("중위 순회");
tree1.inOrderTraversal(tree1);

console.log("후위 순회");
tree1.postOrderTraversal(tree1);
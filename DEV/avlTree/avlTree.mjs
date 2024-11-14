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

    rotation(targetNode, data) {
        let balanceFactor = this.getBalanceFactor(targetNode); 
        let isRootNode = false;
        
        if (targetNode == this.root) {
            isRootNode = true;
        }

        if (balanceFactor < -1 && data > targetNode.getRightSubTree().getData()) { //LLR
            targetNode = this.rotateLeft(targetNode);
        } else if (balanceFactor > 1 && data < targetNode.getLeftSubTree().getData()) { //RRR
            targetNode = this.rotateRight(targetNode);
        } else if (balanceFactor > 1 && data > targetNode.getLeftSubTree().getData()) { //LRR
            targetNode.setLeftSubTree(this.rotateLeft(targetNode.getLeftSubTree()));
            targetNode = this.rotateRight(targetNode);
        } else if (balanceFactor < -1 && data < targetNode.getRightSubTree().getData()) { //RLR
            targetNode.setRightSubTree(this.rotateRight(targetNode.getRightSubTree()));
            targetNode = this.rotateLeft(targetNode);
        }

        if (isRootNode) { //루트노드가 변경되었을 시 실행
            this.root = targetNode;
        }
        
        return targetNode;
    }

    getUnBalanceNode(targetRootNode, unBalanceNode = null) {
        if (targetRootNode.getLeftSubTree() == null && targetRootNode.getRightSubTree() == null) {
            unBalanceNode = targetRootNode;
            return unBalanceNode;
        }

        let balanceFactor = this.getBalanceFactor(targetRootNode);
        if (balanceFactor > 0) { //왼쪽이 높다
            unBalanceNode = this.getUnBalanceNode(targetRootNode.getLeftSubTree(), unBalanceNode);
        } else if (balanceFactor < 0) {
            unBalanceNode = this.getUnBalanceNode(targetRootNode.getRightSubTree(), unBalanceNode);
        } else {
            unBalanceNode = targetRootNode.getRightSubTree();
        }

        return unBalanceNode;
    }

    insert(targetRootNode, data) {
        //비어있을 때
        if (targetRootNode == null) {
            targetRootNode = new BinaryTree(data);
        }

        if (this.root == null) {
            this.root = targetRootNode;
        } else if (targetRootNode.getData() == data) {
            return targetRootNode;
        } else if (targetRootNode.getData() > data) {
            targetRootNode.setLeftSubTree(this.insert(targetRootNode.getLeftSubTree(), data));
        } else {
            targetRootNode.setRightSubTree(this.insert(targetRootNode.getRightSubTree(), data));
        }

        this.updateHeight(targetRootNode);
        targetRootNode = this.rotation(targetRootNode, data);

        return targetRootNode;
    }

    remove(targetRootNode, data, parentNode = null) {
        if (targetRootNode.getData() > data && targetRootNode.getLeftSubTree() != null) {
            targetRootNode.setLeftSubTree(this.remove(targetRootNode.getLeftSubTree(), data, targetRootNode));
        } else if (targetRootNode.getData() < data && targetRootNode.getRightSubTree() != null) {
            targetRootNode.setRightSubTree(this.remove(targetRootNode.getRightSubTree(), data, targetRootNode));
        } else if (targetRootNode.getData() == data) {
            targetRootNode = this.removeHelper(targetRootNode, data, parentNode);

            if (parentNode == null && targetRootNode != null) {
                this.updateHeight (targetRootNode);
                let unBalanceNode = this.getUnBalanceNode(targetRootNode);
                targetRootNode = this.rotation(targetRootNode, unBalanceNode.getData());
            }

            return targetRootNode;
        }

        this.updateHeight(targetRootNode);
        let unBalanceNode = this.getUnBalanceNode(targetRootNode);
        targetRootNode = this.rotation(targetRootNode, unBalanceNode.getData());
        return targetRootNode;
    }

    removeHelper(deletingNode, data, parentNode) {
        let fakeParentRootNode = new BinaryTree(0);
        fakeParentRootNode.setRightSubTree(this.root);

        if (parentNode == null) {
            parentNode = fakeParentRootNode;
        }

        let deletingNodeChild = null;

        if (deletingNode.getLeftSubTree() == null && deletingNode.getRightSubTree() == null) {
            if (parentNode.getLeftSubTree() == deletingNode) {
                parentNode.removeLeftSubTree();
            } else {
                parentNode.removeRightSubTree();   
            }
        } else if (deletingNode.getLeftSubTree() == null || deletingNode.getRightSubTree() == null) {

            if(deletingNode.getLeftSubTree() != null) {
                deletingNodeChild = deletingNode.getLeftSubTree();
            } else {
                deletingNodeChild = deletingNode.getRightSubTree();
            }

            if (parentNode.getLeftSubTree() == deletingNode) {
                parentNode.setLeftSubTree(deletingNodeChild);
            } else {
                parentNode.setRightSubTree(deletingNodeChild);
            }
        } else {
            let replacingNode = deletingNode.getLeftSubTree();
            let replacingNodeParent = deletingNode;

            while(replacingNode.getRightSubTree() != null) {
                replacingNodeParent = replacingNode;
                replacingNode = replacingNode.getRightSubTree();
            }

            let deletingNodeData = deletingNode.getData();
            deletingNode.setData(replacingNode.getData());
            if (replacingNodeParent.getLeftSubTree() == replacingNode) {
                replacingNodeParent.setLeftSubTree(replacingtNode.getLeftSubTree());
            } else {
                replacingNodeParent.setRightSubTree(replacingNode.getLeftSubTree());
            }

            deletingNodeChild = deletingNode;

        }

        if (fakeParentRootNode.getRightSubTree() != this.root) {
            this.root = fakeParentRootNode.getRightSubTree();
        }

        return deletingNodeChild; 
    }
}


let avlTree = new AVLTree();
console.log("========= insert =========");
avlTree.insert(avlTree.root, 1);
avlTree.insert(avlTree.root, 2);
avlTree.insert(avlTree.root, 3);
avlTree.insert(avlTree.root, 3);
avlTree.insert(avlTree.root, 4);
avlTree.insert(avlTree.root, 5);
avlTree.insert(avlTree.root, 6);
avlTree.insert(avlTree.root, 7);

console.log(avlTree.root);
avlTree.root.inOrderTraversal(avlTree.root);

console.log("======== remove =========");
avlTree.remove(avlTree.root, 2);
avlTree.remove(avlTree.root, 3);
avlTree.remove(avlTree.root, 1);
console.log(avlTree.root);
avlTree.root.inOrderTraversal(avlTree.root);

console.log("======== search =========");
console.log(avlTree.search(7));
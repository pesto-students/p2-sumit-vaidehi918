
  
  class Node
  {
    constructor(data)
    {
    this.left = null;
    this.right = null;
    this.data = data;
    }
  }
  
  let prev;

  function isBSTUtil(root)
  {
  
    if (root != null)
    {
      if (!isBSTUtil(root.left))
        return false;

      if (prev != null && root.data <= prev.data)
        return false;

      prev = root;

      return isBSTUtil(root.right);
    }
    return true;
  }

  function isBST(root)
  {
    return isBSTUtil(root);
  }
  
  let root = new Node(3);
  root.left = new Node(2);
  root.right = new Node(5);
  root.left.left = new Node(1);
  root.left.right = new Node(4);

  if (isBST(root))
    document.write("Is BST");
  else
    document.write("Not a BST");




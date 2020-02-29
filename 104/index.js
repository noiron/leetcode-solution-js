/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 递归方法
// var maxDepth = function(root) {

//   if (root === null) {
//     return 0;
//   }
//   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// };

// 层级遍历的方法
var maxDepth = function(root) {

  if (!root) return 0;

  const queue = [];
  queue.push(root);
  let height = 0;

  while (queue.length > 0) {
    let nodeCount = queue.length;

    if (nodeCount === 0) break;

    height++;

    while (nodeCount > 0) {
      // 取出当前层级的节点，加入下一层级的节点
      const node = queue.shift();
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
      nodeCount--;
    }
  }

  return height;
};
using System;

namespace practice
{

    public class Node
    {

        public int data;        //Initilized data entry
        public Node right;
        public Node left;

        
        public Node(int data){  //function used to extablish creation of nodes either right or Left
            right = null;
            left = null;
            this.data = data;
        }  

        public void setLeft(Node left){ //Used to assign a creation of node to the left
            this.left = left;
        }

        public void setRight(Node right){ //Used to assign creation of node to the right
            this.right = right;
        }

    }
    


    public class BST{                // class to establish functions of a Bst
        Node head;              
         int Node_Count=0;
        public BST(){               // just creates the tree
        
        }
          public void Node_Total(){        
            Console.WriteLine(Node_Count.ToString());
        }
        public void add(int entry){
            Node temp = head;
            head = Traverse(temp,entry);
            Node_Count++;
        }

        public void delete(int entry)
        {
            Node temp=head;
            head = DeleteTraverse(temp,entry);
            Node_Count--;
        }

        int deleteValue(Node currentNode)
        {
            int value=currentNode.data;
            while(currentNode.left!=null)
            {
                value=currentNode.left.data;
                currentNode=currentNode.left;
            }
            return value;

        }
        private Node DeleteTraverse(Node currentNode, int entry)
        {
            if(currentNode.data!=entry){

                if(currentNode.data > entry){
                    currentNode.left = DeleteTraverse(currentNode.left,entry);
                }
                else{
                    currentNode.right = DeleteTraverse(currentNode.right,entry);
                }
            }
            else
            {
             if(currentNode.left==null)                                           //if the left is empty pull from the right 
                return currentNode.right;
             if(currentNode.left==null)                                          // if the right is empty pull from the left
                return currentNode.left;

            currentNode.data=deleteValue(currentNode.right);                     //If there are two children

            currentNode.right=DeleteTraverse(currentNode.right,currentNode.data); // works for id the right has nore values
            }

            return currentNode; 

        }
        private Node Traverse(Node currentNode, int entry){

            if(currentNode!=null){
                if(currentNode.data > entry){
                    currentNode.left = Traverse(currentNode.left,entry);
                }
                else{
                    currentNode.right = Traverse(currentNode.right,entry);
                }
            }
            else{
                return new Node(entry);
            }
            return currentNode; 
        }

        public void Print(){
            Node tmp = head;
            PrintInOrder(tmp);
            
        }

        private void PrintInOrder(Node temp){
            if(temp != null){
                Console.Write(temp.data);
                Console.Write(" ");
                if(temp.left != null){
                    PrintInOrder(temp.left);
                }
                if(temp.right != null){
                    PrintInOrder(temp.right);
                }
            }
        }

    }
    

    class Program
    {
        static void Main(string[] args)
        {
            BST tree = new BST(); 
            
            tree.add(2);
            tree.add(1);
            tree.add(4);
            tree.add(3);
            tree.add(5);
            tree.add(10);
            tree.add(12);
            tree.add(6);
            tree.add(8);
            tree.add(7);
           
            Console.Write("Preorder: ");
            tree.Print();
            Console.WriteLine(" ");
           Console.Write("Preorder(after deletion): ");
            tree.delete(3);
            tree.Print();
            Console.WriteLine(" ");
            Console.Write("Total number of nodes:");
            tree.Node_Total();
        }
    }
}
//How the delete funtion works:
// What you are doing is idtenifying the node that is the next succssor to the current node
// After you have chosen the successor, you are replacing the current node with the next node in line.
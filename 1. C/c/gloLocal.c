#include <stdio.h>

	int sub[50];
	int total=0;
    int i;
	float per;

void marks(){
  
   for( i=1; i<=3; i++){
    printf("enter the 3 subject marks: ");
	scanf("%d",&sub[i]);
	  total+=sub[i];
	  per=total*100/300;
   }
   printf("total is %d ",total);
   printf("perncetage is %.2f",per);
   
}


int main(){

   marks();
   
   return 0;
}
#include <stdio.h>

void interst(int p,int r,int n){
	int total=0;
	
	
	printf("enter the value of p \n");
	scanf("%d",&p);
	printf("enter the value of r \n");
	scanf("%d",&r);
	printf("enter the value of n \n");
	scanf("%d",&n);
	
	total=p*r*n/100;
	printf("simple interst is %d",total);
}

int main(){
	int p,r,n;
	interst(p,r,n);
    return 0;
}
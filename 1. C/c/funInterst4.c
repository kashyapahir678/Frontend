#include <stdio.h>

int interst(int p,int r,int n){
	int total=0;
	
	
	printf("enter the value of p \n");
	scanf("%d",&p);
	printf("enter the value of r \n");
	scanf("%d",&r);
	printf("enter the value of n \n");
	scanf("%d",&n);
	
	total=p*r*n/100;
	return total;
}

int main(){
	int p,r,n;
	int total=0;
	total=interst(p,r,n);
	printf("simple interst %d",total);
    return 0;
}
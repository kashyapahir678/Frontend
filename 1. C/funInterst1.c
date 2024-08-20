#include <stdio.h>
#include <string.h>

void interst() {
	int p,r,n;
	int total=0;
	
	printf("enter the value of p \n");
	scanf("%d",&p);
	printf("enter the value of r \n");
	scanf("%d",&r);
	printf("enter the value of n \n");
	scanf("%d",&n);
	
	total=p*r*n/100;
	printf("%d",total);
}

 

int main(){
	
	interst();

	return 0;
}









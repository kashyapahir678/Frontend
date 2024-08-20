#include <stdio.h>

int main(){
	
	int i,k=2,n;
	
	printf("Enter the value");
	scanf("%d",&n);
	
	for(i=1;i<=n;i++){
		if(i==1){
			printf("%d \t",i);
		}
		else{
			printf("%d \t",i*k);
			k*=2;
		}
		
	}
	
	return 0;
}
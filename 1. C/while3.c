#include <stdio.h>

int main() {
	
	int val;
	int a=1;
	
	printf("Enter the value");
	scanf("%d",&val);
	
	while(a<=val){
		printf("%d",a);
		a++;
	}
    
	return 0;
}
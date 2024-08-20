#include <stdio.h>
#include <string.h>

int main(){
	
	char arr[50];
	int i=0;
	int length=0;
	
	gets(arr);
	
	for(i=0; arr[i]!='\0'; i++){
		length=i+1;
	}
	printf("%d",length);
	
	return 0;
}
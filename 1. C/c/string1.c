#include <stdio.h>
#include <string.h>

int main(){
	char arr[50];
	
	int i=0;
	
	gets(arr);
	
	while(arr[i]!='\0'){
		printf("%c",arr[i]);
		i++;
	}
	//puts(arr);
	
	return 0;
}
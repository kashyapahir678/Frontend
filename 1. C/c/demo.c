
#include <stdio.h>

int main() {
    
    char arr[]={'h','e','l','l','0'};
    
    for(int i=0; arr[i]!='\0'; i++){
        for(int j=0; j<i; j++){
            printf("%c",arr[j]);
        }
        printf("\n");
    }

    return 0;
}
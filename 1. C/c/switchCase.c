#include <stdio.h>

int main() {
    
    int n;
    
    printf("enter the value ");
    scanf("%d",&n);
    
    switch(n){
        case 1:
        printf("value is 1");
        break;
        case 2:
        printf("value is 2");
        break;
        case 3:
        printf("value is 3");
        break;
        case 4:
        printf("value is 4");
        break;
        case 5:
        printf("value is 5");
        break;
        default : 
          printf("not match value");
    }
    
    printf("\n");
    
    for(int a=1; a<=10; a++){
        if(a==5){
            continue;
        }
        printf("%d",a);
    }
    
    printf("\n");
    
    for(int i=1; i<=10; i++){
        goto next;
        printf("%d \t",i);
    }
    
    for(int u=1; u<=10; u++){
        printf("%d \t",u);
    }
    
    for(int k=11; k<=20; k++){
        next: printf("%d \t",k);
    }

    return 0;
}
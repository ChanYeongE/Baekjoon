#include <iostream>
#include <vector>
#include <stdio.h>
using namespace std;

int main(){
    pair<int, char> p;

    scanf("%d %c", &p.first, &p.second);
    printf("%d %c\n", p.first, p.second);

    p.first = 1;
    p.second = 's';
    printf("%d %c\n", p.first, p.second);

    p = make_pair(7,'B');
    printf("%d %c", p.first, p.second);
}

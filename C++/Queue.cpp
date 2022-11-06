#include <iostream>
#include <cstdio>
#include <queue>
using namespace std;

int main() {
    queue<int> q1;
    queue<pair<int, char>> q2;
    int a,b;
    int n;
    char c,d;
    
    q1.push(1); //q1 마지막에 데이터 추가
    q1.push(2);
    q1.push(3);
    q1.push(4);
    q1.push(5);
    q1.push(6);
    a = q1.front();
    b = q1.back();
    n = q1.size();

    for(int i=0; i<n; i++){
        printf("%d ", q1.front());
        q1.pop();
    }
    printf("\n");

    printf("front: %d, back: %d\n", a, b);
    q2.push(make_pair(1, 'a'));
    q2.push(make_pair(2, 'b'));
    q2.push(make_pair(3, 'c'));
    q2.push(make_pair(4, 'd'));
    q2.push(make_pair(5, 'e'));

    a = q2.front().first;
    c = q2.front().second;
    b = q2.back().first;
    d = q2.back().second;
    n = q2.size();
    for(int i=0; i<n; i++){
        printf("<%d %c> ", q2.front().first, q2.front().second);
        q2.pop();
        
    }
    printf("\n");
    printf("front: <%d %c>, back: <%d %c>\n", a, c, b, d);

}
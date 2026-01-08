function solveProblem() {
    let q = document.getElementById("question").value.toLowerCase();
    let out = document.getElementById("output");

    if (q.includes("prime")) {
        out.textContent = `
Logic:
A prime number is divisible only by 1 and itself.

C Program:
#include <stdio.h>
int main() {
    int n, i, flag = 0;
    scanf("%d", &n);

    for(i = 2; i <= n/2; i++) {
        if(n % i == 0) {
            flag = 1;
            break;
        }
    }

    if(flag == 0 && n > 1)
        printf("Prime Number");
    else
        printf("Not Prime");

    return 0;
}
`;
    }

    else if (q.includes("factorial")) {
        out.textContent = `
Logic:
Multiply numbers from 1 to n.

C Program:
#include <stdio.h>
int main() {
    int n, fact = 1;
    scanf("%d", &n);

    for(int i = 1; i <= n; i++)
        fact *= i;

    printf("%d", fact);
    return 0;
}
`;
    }

    else if (q.includes("reverse")) {
        out.textContent = `
Logic:
Extract last digit and build reverse.

C Program:
#include <stdio.h>
int main() {
    int n, rev = 0;
    scanf("%d", &n);

    while(n != 0) {
        rev = rev * 10 + n % 10;
        n /= 10;
    }

    printf("%d", rev);
    return 0;
}
`;
    }

    else {
        out.textContent = "❌ Sorry, I currently support basic C programs only.\nTry: prime, factorial, reverse, palindrome, array sum";
    }
}

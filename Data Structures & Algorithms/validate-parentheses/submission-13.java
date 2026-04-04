class Solution {
    public boolean isValid(String s) {
        Deque<Character> stack = new ArrayDeque<>();
        Map<Character, Character> openToClose = Map.of(
            ')','(',
            '}','{',
            ']','['
        );

        for (char c : s.toCharArray()) {
            if (openToClose.containsKey(c)) {
                if (
                    stack.size() > 0 &&
                    stack.peek() == openToClose.get(c)
                ) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }
        return stack.size() == 0;
    }
}

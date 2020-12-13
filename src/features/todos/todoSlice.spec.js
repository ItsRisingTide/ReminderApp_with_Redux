import todos, { addTodo } from "./todoSlice"

describe('todos reducer', () => {
    it("should handle initial state", () => {
        expect(todos(undefined, {})).toEqual([])
    })

    it("should handle addTodo", () => {
        expect(
            todos([], {
                type: addTodo,
                payload: {
                    text: 'Running addTodo test',
                    id: 0,
                }
            })
        ).toEqual([
            {
                text: 'Running addTodo test',
                completed: false,
                id: 0,
            }
        ])
    })
})
import { describe, expect, it } from 'vitest';
import { createPerson, Person } from '$lib/person';
import { KanbanBoard } from '$lib/kanban-board';

/**
 * toBe: https://vitest.dev/api/expect.html#tobe
 * toBeCloseTo: https://vitest.dev/api/expect.html#tobecloseto
 * toBeInstanceOf: https://vitest.dev/api/expect.html#tobeinstanceof
 * toBeUndefined: https://vitest.dev/api/expect.html#tobeundefined
 * toContain: https://vitest.dev/api/expect.html#tocontain
 * toThrow: https://vitest.dev/api/expect.html#tothrow
 * toThrowError: https://vitest.dev/api/expect.html#tothrowerror
 */

it(
  'should pass if the two numbers would add up correctly in a language other than JavaScript',
  () => {
    expect(0.2 + 0.1).toBeCloseTo(0.3);
  },
);

describe('createPerson', () => {
  it.todo('should create an instance of a person', () => {
    const person = createPerson('Ada Lovelace');
    expect.hasAssertions();
    // Verify that person is an instance of a Person.
  });
});

describe('Kanban Board', () => {
  it('should include "Backlog" in board.statuses', () => {
    const board = new KanbanBoard('Things to Do');
    expect.hasAssertions();
    expect(board.statuses).toContain("Backlog")
  });

  it('should *not* include "Bogus" in board.statuses', () => {
    const board = new KanbanBoard('Things to Do');
    expect.hasAssertions();
    expect(board.statuses).not.toContain('Bogus')
  });

  it(
    'should include an added status in board.statuses using #addStatus',
    () => {
      const board = new KanbanBoard('Things to Do');
      expect.hasAssertions();
      board.addStatus('added')
      expect(board.statuses).includes('added')
    },
  );

  it('should remove a status using #removeStatus', () => {
    const board = new KanbanBoard('Things to Do');
    expect.hasAssertions();
    const status = 'new status'

    board.addStatus(status)
    expect(board.statuses).toContain(status)

    board.removeStatus(status)
    expect(board.statuses).not.toContain(status)
  });
});

describe('Person', () => {
  it('will create a person with a first name', () => {
    const person = new Person('Madonna');
    expect.hasAssertions();
    expect(person.firstName).toBe("Madonna")
  });

  it('will create a person with a first and last name', () => {
    const person = new Person('Madonna Cicone');
    expect.hasAssertions();
    expect(person.lastName).toBe("Cicone")
  });
  
  it('will create a person with a first, middle, and last name', () => {
    const person = new Person('Madonna Louise Cicone');
    expect.hasAssertions();
    expect(person.middleName).toBe("Louise")
    // Verify that person.middleName is correct.
  });

  it('will throw if you provide an empty string', () => {
    const fn = () => {
      new Person('');
    };

    expect.hasAssertions();
    expect(fn).toThrow()
  });

  it(
    'will throw a specific error message if you provide an empty string',
    () => {
      const errorMessage = 'fullName cannot be an empty string';

      const fn = () => {
        new Person('');
      };

      expect.hasAssertions();

      expect(fn).toThrow(errorMessage)
    },
  );

  it('will add a friend', () => {
    const john = new Person('John Lennon');
    const paul = new Person('Paul McCartney');

    john.addFriend(paul);

    expect.hasAssertions();

    expect(john.friends).includes(paul)
  });

  it('will mutually add a friend', () => {
    const john = new Person('John Lennon');
    const paul = new Person('Paul McCartney');

    john.addFriend(paul);

    expect.hasAssertions();

    // Verify that paul.friends contains john.
    expect(paul.friends).includes(john)
  });

  it('will remove a friend', () => {
    const john = new Person('John Lennon');
    const paul = new Person('Paul McCartney');

    john.addFriend(paul);
    john.removeFriend(paul);

    expect.hasAssertions();

    // Verify that john.friends does not include paul.
    expect(john.friends).not.toContain(paul)
  });

  it('will mutually remove friends', () => {
    const john = new Person('John Lennon');
    const paul = new Person('Paul McCartney');

    john.addFriend(paul);
    john.removeFriend(paul);

    expect.hasAssertions();

    // Verify that paul.friends does not include john.
    expect(paul.friends).not.toContain(john)

  });
});

const explode = () => {
  throw new Error('Something went terribly wrong');
};

describe('explode', () => {
  it.fails('should throw an error', () => {
    explode();

  });

  it('should throw a specific error containing "terribly wrong"', () => {
    expect(explode).toThrowError("terribly wrong")
  });
});

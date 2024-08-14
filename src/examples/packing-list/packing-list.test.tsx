import { render, screen, } from 'test/utilities';
import PackingList from '.';

it('renders the Packing List application', () => {
  render(<PackingList />);
});

it('has the correct title', async () => {
  render(<PackingList />);
  screen.getByText('Packing List');
});

it('has an input field for a new item', () => {
  render(<PackingList />);
  screen.getByLabelText('New Item Name')
});

it(
  'has a "Add New Item" button that is disabled when the input is empty',
  () => {
    render(<PackingList />);
    const addButton = screen.getByText(/Add New Item/i)
    expect(addButton).toBeDisabled()
  },
);

it(
  'enables the "Add New Item" button when there is text in the input field',
  async () => {
    const { user } = render(<PackingList />);
    const addButton = screen.getByText(/Add New Item/i)
    // const newItemInput = screen.getByLabelText('New Item Name')
    const newItemInput = document.getElementById('new-item-name')!
    expect(addButton).toBeDisabled()
    await user.type(newItemInput,'asdf')
    expect(addButton).not.toBeDisabled()
  },
);

it(
  'adds a new item to the unpacked item list when the clicking "Add New Item"',
  async () => {
    const { user } = render(<PackingList />);
    const addButton = screen.getByText(/Add New Item/i);
    const newItemInput = screen.getByLabelText('New Item Name');
    expect(addButton).toBeDisabled()
    await user.type(newItemInput,'asdf')
    expect(addButton).not.toBeDisabled()
    await user.click(addButton)
    const newItem = screen.getByLabelText<HTMLInputElement>('asdf')
    expect(newItem.type).toBe('checkbox')
    expect(newItem).not.toBeChecked()

  },
);

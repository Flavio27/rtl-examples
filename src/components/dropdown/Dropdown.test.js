import { Dropdown } from "./Dropdown";
import { screen, render, userEvent } from "../../tests";

/** 
* Regra 1 -  Dropdown começe fechado;
* Regra 2 - Mostrar as opções quando for clicado, se clicado novamente ele fecha;
* Regra 3 - Quando selecionar o item do menu, fechar e manter o qual foi selecionado;
*/
const title = "Selecione o seu Pokémon";
const options = ["Charmander", "Squirtle", "Bulbasaur"];

describe("Dropdown", () => {
  // * Regra 1 -  Dropdown começe fechado;
  it("should start closed", () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);

    options.map((option) =>
      expect(screen.queryByText(option)).not.toBeInTheDocument()
    );
  });

  // * Regra 2 - Mostrar as opções quando for clicado, se clicado novamente ele fecha;
  it("should show options when open", () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);

    options.map((option) =>
      expect(screen.queryByText(option)).not.toBeInTheDocument()
    );

    const dropDownButton = screen.getByRole("button", { name: title });

    userEvent.click(dropDownButton);

    options.map((option) =>
      expect(screen.getByRole("menuitem", { name: option })).toBeInTheDocument()
    );
  });

  // * Regra 3 - Quando selecionar o item do menu, fechar e manter o qual foi selecionado;
  it("should signal an option was selected and close the dropdown", () => {
    const onSelect = jest.fn();
    render(<Dropdown title={title} options={options} onSelect={onSelect} />);

    userEvent.click(screen.getByRole("button", { name: title }));

    options.map((option) =>
      expect(screen.getByRole("menuitem", { name: option })).toBeInTheDocument()
    );

    const option0 = screen.getByRole("menuitem", { name: options[0] });
    const option1 = screen.getByRole("menuitem", { name: options[1] });
    const option2 = screen.getByRole("menuitem", { name: options[2] });

    userEvent.click(option1);

    expect(onSelect).toHaveBeenCalledWith(options[1]);

    options.map((option) =>
    expect(screen.queryByText(option)).not.toBeInTheDocument()
  );
  
  });
});

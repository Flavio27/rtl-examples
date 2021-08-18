import { Contador } from "./Contador";
import { screen, render, userEvent } from "../../tests";

/*
 * Regras:
 * O numero deve começar com 0
 * Ao clicar no botão incrementar o numero deve receber + 1
 * Ao clicar no botão decrementar o numero deve receber - 1
 * Se o numero numero for >= 0 ele deve permanecer da cor preto (class positive)
 * Se o numero for < 0 ele deve ficar vermelho (class negative)
 */

describe("Contador", () =>{

  // * O numero deve começar com 0
  it ("The counter should be start with 0", () => {
    render(<Contador/>)
    expect(screen.queryByText("0")).toBeInTheDocument();
  })

  // * Ao clicar no botão incrementar o numero deve receber + 1
  it ("Should increment a number when click the button plus", () => {
    render(<Contador/>)
    const IncrementButton = screen.getByRole("button", { name: "+" });
    userEvent.click(IncrementButton);
    expect(screen.queryByText("1")).toBeInTheDocument();
    userEvent.click(IncrementButton);
    expect(screen.queryByText("2")).toBeInTheDocument();
  })

  // * Ao clicar no botão decrementar o numero deve receber - 1
  it ("Should decrement a number when click the button subtract", () => {
    render(<Contador/>)
    const decrementButton = screen.getByRole("button", { name: "-" });
    userEvent.click(decrementButton);
    expect(screen.queryByText("-1")).toBeInTheDocument();
    userEvent.click(decrementButton);
    expect(screen.queryByText("-2")).toBeInTheDocument();
  })

 // * Se o numero numero for >= 0 ele deve permanecer da cor preto (class positive)
  it ("If number >= 0 the counter color is black", () => {
    render(<Contador/>)
    const number = screen.queryByText("0");
    expect(number).toHaveClass("positive")
    const IncrementButton = screen.getByRole("button", { name: "+" });
    userEvent.click(IncrementButton);
    expect(number).toHaveClass("positive")
  })

  // * Se o numero for < 0 ele deve ficar vermelho (class negative)
  it ("If number > 0 the counter color is red", () => {
    render(<Contador/>)
    const number = screen.queryByText("0");
    const decrementButton = screen.getByRole("button", { name: "-" });
    userEvent.click(decrementButton);
    expect(number).toHaveClass("negative")
    
  })
})

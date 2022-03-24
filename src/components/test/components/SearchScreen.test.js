import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { SearchScreen } from "../../search/SearchScreen";

describe("Pruebas en el <SearchScreen />", () => {
  // test al componente de search screen cada test lleva su nombre y detalla el contenido del test
  test("se debe mostrar correctamente los valores por defecto", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["search"]}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(
      wrapper
        .find(".btn-outline-primary")
        .text()
        .trim()
    ).toBe("Buscar ...");
  });
  test("debe de mostrar noticia por id y el input con el valor del queryString", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["search/?q=11"]}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wrapper.find("input").prop("value")).toBe("11");
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar error si no encuentra una noticia", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["search/?q=11"]}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(
      wrapper
        .find(".alert-danger")
        .text()
        .trim()
    ).toBe("No hay resultados 11");
  });
});

import Block from './block';

export function render(rootSelector: string, component: Block): void {
  const root = document.querySelector(rootSelector);

  if (!root) {
    throw new Error("Not found root");
  }

  root.innerHTML = "";

  root.append(component.getContent()!);
}

export function renderPage(page: Block): void {
  render("#root", page);
}

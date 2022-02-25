export type ProfileProps = {
  name: string;
};

export function Profile({ name }: ProfileProps) {
  return <div>Profile, {name}</div>;
}

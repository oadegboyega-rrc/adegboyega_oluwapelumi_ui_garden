import React from 'react';
import {
  Button,
  Card,
  Dropdown,
  HeroImage,
  Img,
  Label,
  RadioButton,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableFooter
} from 'adegboyega_oluwapelumi';

type WorkItem = {
  title: string;
  description: string;
  image: string;
  link: string;
  tech: string[];
};

type SkillItem = {
  category: string;
  description: string;
  items: string[];
};

type ResourceItem = {
  title: string;
  image: string;
  summary: string;
  link: string;
};

const works: WorkItem[] = [
  {
    title: 'Component Library',
    description: 'A reusable React component library with Storybook and tests.',
    image: 'https://picsum.photos/seed/library/400/240',
    link: 'https://example.com/library',
    tech: ['React', 'TypeScript', 'Storybook', 'Jest']
  }
];

const skills: SkillItem[] = [
  { category: 'Languages & Frameworks', description: 'Primary tools for development', items: ['JavaScript', 'TypeScript', 'React', 'Node.js'] },
  { category: 'Tools', description: 'Ecosystem and tooling', items: ['GitHub Actions', 'Docker', 'Storybook', 'Jest', 'ESLint'] }
];

const resources: ResourceItem[] = [
  { title: 'GitHub', image: 'https://simpleicons.org/icons/github.svg', summary: 'Source control and CI', link: 'https://github.com' },
  { title: 'Storybook', image: 'https://raw.githubusercontent.com/storybookjs/brand/main/badge/badge-storybook.svg', summary: 'Component docs and playground', link: 'https://storybook.js.org' }
];

export default function App(): JSX.Element {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: 24, maxWidth: 1080, margin: '0 auto' }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
        <HeroImage src="https://picsum.photos/seed/profile/1200/300" alt="Profile" />
        <div>
          <h1 style={{ margin: 0 }}>Adegboyega Oluwapelumi</h1>
          <p style={{ margin: '4px 0 0' }}>Frontend Engineer • UI Components • Testing</p>
        </div>
      </header>

      <section style={{ marginBottom: 32 }}>
        <Label text="Work" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginTop: 12 }}>
          {works.map((w) => (
            <Card key={w.title}>
              <Img src={w.image} alt={w.title} style={{ width: '100%', borderRadius: 8 }} />
              <h3 style={{ margin: '12px 0 4px' }}>{w.title}</h3>
              <p style={{ margin: 0 }}>{w.description}</p>
              <p style={{ margin: '8px 0 0', fontSize: 12, color: '#555' }}>Tech: {w.tech.join(', ')}</p>
              <div style={{ marginTop: 12 }}>
                <Button text="View Project" onClick={() => window.open(w.link, '_blank')} />
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Label text="Skills" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginTop: 12 }}>
          {skills.map((s) => (
            <Card key={s.category}>
              <h3 style={{ margin: 0 }}>{s.category}</h3>
              <p style={{ margin: '8px 0' }}>{s.description}</p>
              <p style={{ margin: 0, fontSize: 12, color: '#555' }}>{s.items.join(', ')}</p>
            </Card>
          ))}
        </div>
        <div style={{ marginTop: 16 }}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Category</TableCell>
                <TableCell>Items</TableCell>
              </TableRow>
            </TableHeader>
            {skills.map((s) => (
              <TableRow key={s.category}>
                <TableCell>{s.category}</TableCell>
                <TableCell>{s.items.join(', ')}</TableCell>
              </TableRow>
            ))}
            <TableFooter>Total Categories: {skills.length}</TableFooter>
          </Table>
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Label text="Resources" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginTop: 12 }}>
          {resources.map((r) => (
            <Card key={r.title}>
              <Img src={r.image} alt={r.title} style={{ width: 64, height: 64, objectFit: 'contain' }} />
              <h3 style={{ margin: '8px 0 4px' }}>{r.title}</h3>
              <p style={{ margin: 0 }}>{r.summary}</p>
              <div style={{ marginTop: 8 }}>
                <Button text="Visit" onClick={() => window.open(r.link, '_blank')} />
              </div>
            </Card>
          ))}
        </div>
      </section>

      <footer style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <Button text="Contact" onClick={() => (window.location.href = 'mailto:someone@example.com')} />
        <Dropdown options={[{ label: 'GitHub', value: 'gh' }, { label: 'LinkedIn', value: 'li' }]} onChange={() => { /* noop */ }} />
        <RadioButton label="Open to work" name="open" value="yes" />
        <Img src="https://raw.githubusercontent.com/storybookjs/brand/main/icon/icon-storybook-default.svg" alt="share" style={{ width: 24, height: 24 }} />
      </footer>
    </div>
  );
}


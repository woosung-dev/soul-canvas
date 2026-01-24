-- Create Quizzes Table
CREATE TABLE IF NOT EXISTS quizzes (
  id TEXT PRIMARY KEY, -- 'personality-color' etc.
  title TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create Questions Table
CREATE TABLE IF NOT EXISTS questions (
  id SERIAL PRIMARY KEY,
  quiz_id TEXT REFERENCES quizzes(id) ON DELETE CASCADE,
  text TEXT NOT NULL,
  step_order INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create Options Table
CREATE TABLE IF NOT EXISTS options (
  id SERIAL PRIMARY KEY,
  question_id INTEGER REFERENCES questions(id) ON DELETE CASCADE,
  text TEXT NOT NULL,
  value TEXT NOT NULL, -- e.g. 'RED'
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create Results Table
CREATE TABLE IF NOT EXISTS results (
  id SERIAL PRIMARY KEY,
  quiz_id TEXT REFERENCES quizzes(id) ON DELETE CASCADE,
  value TEXT NOT NULL, -- e.g. 'RED'
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Build Indexes for performance
CREATE INDEX IF NOT EXISTS idx_questions_quiz_id ON questions(quiz_id);
CREATE INDEX IF NOT EXISTS idx_questions_order ON questions(quiz_id, step_order);
CREATE INDEX IF NOT EXISTS idx_options_question_id ON options(question_id);
CREATE INDEX IF NOT EXISTS idx_results_quiz_id ON results(quiz_id);
CREATE INDEX IF NOT EXISTS idx_results_value ON results(quiz_id, value);

-- Row Level Security (RLS)
ALTER TABLE quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE options ENABLE ROW LEVEL SECURITY;
ALTER TABLE results ENABLE ROW LEVEL SECURITY;

-- Public Read Access Policy
CREATE POLICY "Allow public read access on quizzes" ON quizzes FOR SELECT USING (true);
CREATE POLICY "Allow public read access on questions" ON questions FOR SELECT USING (true);
CREATE POLICY "Allow public read access on options" ON options FOR SELECT USING (true);
CREATE POLICY "Allow public read access on results" ON results FOR SELECT USING (true);

-- Admin Write Access (Only authenticated users with 'admin' role or specific implementation)
-- For now, we allow authenticated users to INSERT/UPDATE/DELETE if we implement Admin Auth later.
-- Or initially, we can leave it read-only for public and manage via Supabase Dashboard.

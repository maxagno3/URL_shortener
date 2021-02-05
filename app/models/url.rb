require 'securerandom'

class Url < ApplicationRecord
  validates :url, presence: true, format: { with: URI::regexp(%w[http https]) }, uniqueness: true
  validates :slug, uniqueness: true

  def generate_slug
    loop do
      slug = SecureRandom.alphanumeric(6)
      break self.slug = slug unless Url.exists?(slug: slug)
    end
  end
end

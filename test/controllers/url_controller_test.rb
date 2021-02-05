require "test_helper"

class UrlControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get url_index_url
    assert_response :success
  end

  test "should get create" do
    get url_create_url
    assert_response :success
  end
end
